import React, { useState } from 'react'
import { Row, Col, Typography, Input, Form, Space, Button, Upload, message, Result } from 'antd'
import type { UploadFile } from 'antd/es/upload/interface'
import { UploadOutlined } from '@ant-design/icons'

const { Title, Paragraph } = Typography

type FormValues = {
    name: string
    contact: string
    square?: string
    file?: UploadFile[]
}

const phoneRegex =
    /^(\+?\d{1,3}[-.\s]?)?(\(?\d{2,4}\)?[-.\s]?)?\d{3,4}[-.\s]?\d{3,4}$/
const emailRegex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const phoneOrEmailValidator = async (_: unknown, value?: string) => {
    if (!value) return Promise.reject(new Error('Please enter a phone or email'))
    const v = value.trim()
    if (emailRegex.test(v) || phoneRegex.test(v)) return Promise.resolve()
    return Promise.reject(new Error('Enter a valid phone number or email'))
}

// Normalize Upload event → fileList
const normFile = (e: unknown): UploadFile[] => {
    if (Array.isArray(e)) return e
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    return e?.fileList ?? []
}

const ContactForm: React.FC = () => {
    const [form] = Form.useForm<FormValues>()
    const [submitting, setSubmitting] = useState(false)
    const [sent, setSent] = useState(false)

    const handleSubmit = async (values: FormValues) => {
        try {
            setSubmitting(true)
            const formData = new FormData()
            formData.append('name', values.name.trim())
            formData.append('contact', values.contact.trim())
            formData.append('square', (values.square || '').trim())

            const file = values.file?.[0]?.originFileObj
            if (file) {
                formData.append('file', file)
            }

            const resp = await fetch('/api/contact', {
                method: 'POST',
                body: formData,
            })

            if (resp.ok) {
                message.success('Mulțumim! Mesajul a fost trimis.')
                setSent(true)
                form.resetFields()
            } else {
                const text = await resp.text().catch(() => '')
                message.error(text || 'Something went wrong.')
            }
        } catch (err) {
            console.error(err)
            message.error('Error submitting the form.')
        } finally {
            setSubmitting(false)
        }
    }

    if (sent) {
        return (
            <Row justify="center" style={{ padding: '40px 20px', width: '100%' }}>
                <Col xs={24} sm={20} md={16} lg={12}>
                    <Result
                        status="success"
                        title="Message sent successfully!"
                        subTitle="We’ll get back to you shortly via the contact you provided."
                        extra={
                            <Button type="primary" onClick={() => setSent(false)}>
                                Send another message
                            </Button>
                        }
                    />
                </Col>
            </Row>
        )
    }

    return (
        <Row justify="center" style={{ padding: '40px 20px', width: '100%' }}>
            <Col xs={24} sm={20} md={16} lg={12}>
                <Space direction="vertical" size="large" style={{ width: '100%' }}>
                    <div>
                        <Title level={2}>Office in Chisinau</Title>
                        <Paragraph>6 Decebal Boulevard</Paragraph>
                        <Paragraph>
                            <a href="mailto:mood.dsgn.studio@gmail.com">mood.dsgn.studio@gmail.com</a>
                        </Paragraph>
                        <Paragraph>
                            <a href="tel:+37369735420">+373 69735420</a> (Telegram, WhatsApp)
                        </Paragraph>
                        <Paragraph>
                            <a href="tel:+37368463665">+373 68463665</a> (Telegram, WhatsApp)
                        </Paragraph>
                    </div>

                    <div>
                        <Title level={2}>Let’s talk!</Title>
                        <Form
                            form={form}
                            layout="vertical"
                            onFinish={handleSubmit}
                            requiredMark="optional"
                        >
                            <Form.Item
                                name="name"
                                label="Name"
                                rules={[
                                    { required: true, message: 'Please enter your name' },
                                    { min: 2, message: 'Name should be at least 2 characters' },
                                ]}
                                hasFeedback
                            >
                                <Input
                                    placeholder="Name"
                                    size="large"
                                    bordered={false}
                                    style={{ borderBottom: '1px solid #ccc' }}
                                />
                            </Form.Item>

                            <Form.Item
                                name="contact"
                                label="Phone or Email"
                                rules={[{ validator: phoneOrEmailValidator }]}
                                hasFeedback
                            >
                                <Input
                                    placeholder="Phone or Email"
                                    size="large"
                                    bordered={false}
                                    inputMode="email"
                                    style={{ borderBottom: '1px solid #ccc' }}
                                />
                            </Form.Item>

                            <Form.Item
                                name="square"
                                label="Square m"
                                rules={[
                                    {
                                        validator: (_rule, value?: string) => {
                                            if (!value || value.trim() === '') return Promise.resolve()
                                            const n = Number(value)
                                            if (!Number.isNaN(n) && n > 0) return Promise.resolve()
                                            return Promise.reject(new Error('Enter a positive number'))
                                        },
                                    },
                                ]}
                                tooltip="Optional"
                                hasFeedback
                            >
                                <Input
                                    placeholder="e.g. 42"
                                    size="large"
                                    bordered={false}
                                    inputMode="numeric"
                                    style={{ borderBottom: '1px solid #ccc' }}
                                />
                            </Form.Item>

                            <Form.Item
                                name="file"
                                label="Attach File (optional)"
                                valuePropName="fileList"
                                getValueFromEvent={normFile}
                                extra="PDF, JPG, PNG up to 10 MB"
                            >
                                <Upload
                                    beforeUpload={() => false} // prevent auto-upload
                                    maxCount={1}
                                    accept=".pdf,.jpg,.jpeg,.png"
                                    onChange={({ file }) => {
                                        // basic client-side size check
                                        const sizeMB = (file.size ?? 0) / (1024 * 1024)
                                        if (sizeMB > 10) {
                                            message.error('File must be under 10 MB')
                                        }
                                    }}
                                >
                                    <Button icon={<UploadOutlined />}>Select file</Button>
                                </Upload>
                            </Form.Item>

                            <Form.Item>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    size="large"
                                    loading={submitting}
                                    block
                                >
                                    Send Message
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </Space>
            </Col>
        </Row>
    )
}

export default ContactForm

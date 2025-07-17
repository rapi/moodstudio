import React from 'react'
import { Row, Col, Typography, Input, Form, Space, Button, Upload, message } from 'antd'
import { UploadOutlined } from '@ant-design/icons'

const { Title, Paragraph } = Typography

const ContactForm: React.FC = () => {
    const [form] = Form.useForm()

    const handleSubmit = async (values: any) => {
        try {
            const formData = new FormData()
            formData.append('name', values.name)
            formData.append('contact', values.contact)
            formData.append('square', values.square || '')

            if (values.file?.file) {
                formData.append('file', values.file.file)
            }

            const response = await fetch('/api/contact', {
                method: 'POST',
                body: formData,
            })

            if (response.ok) {
                message.success('Message sent successfully!')
                form.resetFields()
            } else {
                message.error('Something went wrong.')
            }
        } catch (err) {
            console.error(err)
            message.error('Error submitting the form.')
        }
    }

    return (
        <Row justify="center" style={{ padding: '40px 20px',width: '100%' }}>
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
                        <Form form={form} layout="vertical" onFinish={handleSubmit}>
                            <Form.Item name="name">
                                <Input
                                    placeholder="Name"
                                    size="large"
                                    bordered={false}
                                    style={{ borderBottom: '1px solid #ccc' }}
                                />
                            </Form.Item>

                            <Form.Item name="contact">
                                <Input
                                    placeholder="Phone or Email"
                                    size="large"
                                    bordered={false}
                                    style={{ borderBottom: '1px solid #ccc' }}
                                />
                            </Form.Item>

                            <Form.Item name="square">
                                <Input
                                    placeholder="Square m"
                                    size="large"
                                    bordered={false}
                                    style={{ borderBottom: '1px solid #ccc' }}
                                />
                            </Form.Item>

                            <Form.Item name="file" valuePropName="file">
                                <Upload beforeUpload={() => false} maxCount={1}>
                                    <Button icon={<UploadOutlined />}>Attach File (optional)</Button>
                                </Upload>
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" htmlType="submit" size="large">
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

// Header.tsx
import React, { FC } from "react";
import { Container, Nav } from "react-bootstrap";
import Menu from "../Menu/Menu";
import Link from "next/link";
import styles from "./Header.module.css";

interface HeaderProps {
    minified: boolean;
}

const Header: FC<HeaderProps> = ({ minified }) => {
    return (
        <div
            className={[
                styles.header,
                minified ? styles.headerMinified : ""
            ]
                .join(" ")
                .trim()}
        >
            <Container>
                <div className="content">
                    <Nav className="nav">
                        <Link href="/" className="nav-link">
                            <div className="logo">
                                <img width={100} src="/logo.svg" alt="ROGUE SHARKS" />
                            </div>
                        </Link>
                    </Nav>
                </div>
            </Container>
            <Menu minified={minified} />
        </div>
    );
};

export default Header;

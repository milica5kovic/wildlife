import { Button, Container, Menu } from "semantic-ui-react";
import React from "react";
import './styles.css'
export default function NavBar() {
    return (
        <Menu inverted fixed="top">
            <Container>
                <Menu.Item header>
                    <img src='/assets/tupko.png' alt='logo' style={{marginRight: '10px'}}/>
                    Wildlife

                </Menu.Item>

                <Menu.Item name='Activities' />

                <Menu.Item>
                    <Button positive content='Create new activity' />
                </Menu.Item>

            </Container>

        </Menu>
    )
}


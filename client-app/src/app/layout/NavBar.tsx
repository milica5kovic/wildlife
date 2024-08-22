import { Button, Container, Menu } from "semantic-ui-react";
import './styles.css'

interface Props{
    openForm: () => void;
    
}

export default function NavBar({openForm} : Props) {
    return (
        <Menu inverted fixed="top">
            <Container>
                <Menu.Item header>
                    <img src='/assets/tupko.png' alt='logo' style={{marginRight: '10px'}}/>
                    Wildlife

                </Menu.Item>

                <Menu.Item name='Activities' />

                <Menu.Item>
                    <Button onClick={openForm} positive content='Create new activity' />
                </Menu.Item>

            </Container>

        </Menu>
    )
}


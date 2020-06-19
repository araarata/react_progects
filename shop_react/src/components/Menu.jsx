import React from 'react';
import { Menu, Popup, List, Button, Image} from 'semantic-ui-react'

const CartComponent = ({title, id, image, removeFromCard}) => (
    <List selection divided verticalAlign='middle'>
        <List.Item>
            <List.Content floated='right'>
                <Button color="red" onClick={removeFromCard.bind(this, id)}>Удалить</Button>
            </List.Content>
            <Image avatar src={image} />
            <List.Content>{title}</List.Content>
        </List.Item>
    </List>
)

const MenuComponent = ({totalPrice, count, items}) => (
    <Menu>
        <Menu.Item
            name='browse'
        >
           Меню книг
        </Menu.Item>

        <Menu.Menu position='right'>
            <Menu.Item
                name='signup'
            >
                Итого: &nbsp; <b>{totalPrice}</b> руб.
            </Menu.Item>
            <Popup
                trigger = {
                    <Menu.Item
                        name='help'
                    >
                        Корзина (<b>{count}</b>) руб
                    </Menu.Item>
                }
                content={items.map(book => <CartComponent {...book} />)}
                on="click"
                hideOnScroll
            />
        </Menu.Menu>
    </Menu>
)

export default MenuComponent
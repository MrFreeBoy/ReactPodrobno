import React, {useState} from 'react';
import {ComponentStory, ComponentMeta, Story} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import Accordion, {AccordionPropsType} from "./Accordion";

const GetCategoryObj = (categoryName: 'Color'|'Event'|'Main')=>({
    table: {
        category: categoryName
    }
})


export default {
    title: 'components/Accordion stories',
    component: Accordion,
    argType: {
        color: {
            color: 'color',
            ...GetCategoryObj('Color')
        },
        onChange: {
            ...GetCategoryObj('Event')
        },
        onClick: {
            ...GetCategoryObj('Event')
        },
        items:{...GetCategoryObj('Main')},
        collapsed:{...GetCategoryObj('Main')},
        titleValue:{...GetCategoryObj('Main')}
    }
}

const callback = action("accordion mode change event fired");
const onClickCallback = action('some item was clicked')

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args}/>
const callBacksProps = {
    onChange: callback,
    onClick: onClickCallback
}

export const MenuCollapsedMode = Template.bind({});
MenuCollapsedMode.args = {
    ...callBacksProps,
    titleValue: "Menu",
    collapsed: true,
    items: [],

}
export const UsersUnCollapsedMode = Template.bind({});
UsersUnCollapsedMode.args = {
    ...callBacksProps,
    titleValue: "Users",
    collapsed: false,
    items: [],
}


export const ModeChanging: Story<AccordionPropsType> = (args) => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion {...args} collapsed={value} onChange={() => setValue(!value)}/>;
};

ModeChanging.args = {
    titleValue: "Users",
    items: [],
    onClick: (value) => {
        alert('user witch ID ${value} should be happy')
    }
}

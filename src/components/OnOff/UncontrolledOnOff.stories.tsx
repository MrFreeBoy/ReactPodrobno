import React, {useState} from 'react';
import {ComponentStory, ComponentMeta, Story} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import UncontrolledOnOff from "./UncontrolledOnOff";



export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff
}

const callback = action("on or off clicked");


export const OnMode = () => <UncontrolledOnOff  defaultOn={true} onChange={callback}/>;
export const OffMode = () => <UncontrolledOnOff  defaultOn={false} onChange={callback}/>;


/*
 * @Author: renjie.yin
 * @Date: 2023-02-21 22:25:13
 * @LastEditors: renjie.yin
 * @LastEditTime: 2023-02-21 22:26:29
 * @Description:<>
 */
import React from 'react';
import type { PickerProps } from './Picker';

export const ConfigContext = React.createContext<Partial<PickerProps<any>>>({});

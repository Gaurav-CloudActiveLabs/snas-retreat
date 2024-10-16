'use client'
/* eslint-disable */
import { getInitPage } from '@keystone-6/auth/pages/InitPage'

const fieldPaths = ["name","phoneNumber","password"]

export default getInitPage({"listKey":"User","fieldPaths":["name","phoneNumber","password"],"enableWelcome":false})

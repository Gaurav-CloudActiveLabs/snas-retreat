'use client'
/* eslint-disable */
import { getSigninPage } from '@keystone-6/auth/pages/SigninPage'

export default getSigninPage({"identityField":"phoneNumber","secretField":"password","mutationName":"authenticateUserWithPassword","successTypename":"UserAuthenticationWithPasswordSuccess","failureTypename":"UserAuthenticationWithPasswordFailure"})

import { KeystoneContext } from '@keystone-6/core/types';
import { GraphQLError } from 'graphql';

export const userSignUpTypeDefs = `

type UserSignUpResponse {
    id: ID
    email: String
    firstName: String
    error: String
    message: String
    sessionToken: String
    }

  type Mutation {
    UserSignUp(email: String! , firstName: String!, lastName: String, password: String!, ): UserSignUpResponse
  }
`;
export const UserSignUp = async (
  root: any,
  { email, firstName, lastName, password }: any,
  context: KeystoneContext,
) => {
  try {
    const existingUser = await context.sudo().query.User.findOne({
      where: { email: email },
    });

    console.log({ existingUser });

    if (existingUser) {
      return new GraphQLError('User already exists');
    }

    const user = await context.sudo().query.User.createOne({
      data: {
        email: email,
        firstName: firstName,
        password: password,
      },
      query: 'id firstName lastName email',
    });
    console.log({ user });
    const sessionToken = await context.sudo().sessionStrategy?.start({
      data: { itemId: user.id, listKey: 'User' },
      context,
    });

    return {
      id: user.id,
      sessionToken,
      email: user?.email,
      firstName: user?.firstName,
      lastName: user?.lastName,
    };
  } catch (error: any) {
    return {
      error: 'server error',
      message:
        error.extensions.code === 'KS_VALIDATION_FAILURE'
          ? error.message.split('- ')[1].trim()
          : 'server error',
    };
  }
};

export default UserSignUp;

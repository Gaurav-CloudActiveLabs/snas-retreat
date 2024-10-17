import { KeystoneContext } from '@keystone-6/core/types';

type PermissionName = {
  name: string;
};

type Session = {
  itemId: string;
  data: any;
  listKey: string;
};

export const isAuthorized: any = ({
  session,
  listKey,
  operation,
}: {
  session: Session;
  listKey: string;
  context: KeystoneContext;
  operation: string;
}) => {
  return true;
  try {
    if (!session?.itemId.length) {
      return false;
    }
    return true;
  } catch (error) {
    console.log(error);
  }
};

export const isFieldPublic = ({ session }: KeystoneContext['session']): any => {
  if (session?.data.isAdmin) {
    return true;
  }
  return {
    OR: [
      {
        id: {
          equals: session?.itemId,
        },
      },
    ],
  };
};

export const isAdminOrOwner = ({
  session,
}: KeystoneContext['session']): any => {
  if (session?.data.isAdmin) {
    return true;
  }
  return {
    OR: [
      {
        id: {
          equals: session?.itemId,
        },
      },
    ],
  };
};

export const isAdmin = ({ session }: KeystoneContext['session']): any => {
  if (session?.data.isAdmin) {
    return true;
  }
  return false;
};

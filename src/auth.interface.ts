declare global {
    namespace Express {
      interface Request {
        currentUser?: IAuthPayload;
      }
    }
  }
  
  export interface IAuthPayload {
    id: number;
    username: string;
    email: string;
  }
  
  export interface IAuth {
    username?: string;
    password?: string;
    email?: string;
    profilePicture?: string;
  }
  
  export interface IAuthDocument {
    id?: number;
    profilePublicId?: string;
    username?: string;
    email?: string;
    password?: string;
    profilePicture?: string;
    emailVerified?: number;
    emailVerificationToken?: string;
    createdAt?: Date;
    updatedAt?: Date;
    passwordResetToken?: string;
    passwordResetExpires?: Date;
    comparePassword(password: string): Promise<boolean>;
    hashPassword(password: string): Promise<string>;
  }
  
  export interface IAuthBuyerMessageDetails {
    username?: string;
    profilePicture?: string;
    email?: string;
    createdAt?: Date;
    type?: string;
  }
  
  export interface IEmailMessageDetails {
    receiverEmail?: string;
    template?: string;
    verifyLink?: string;
    resetLink?: string;
    username?: string;
  }
  
  export interface ISignUpPayload {
    [key: string]: string;
    username: string;
    password: string;
    email: string;
    profilePicture: string;
  }
  
  export interface ISignInPayload {
    [key: string]: string;
    username: string;
    password: string;
  }
  
  export interface IForgotPassword {
    email: string;
  }
  
  export interface IResetPassword {
    [key: string]: string;
    password: string;
    confirmPassword: string;
  }
  export interface ILogout {
    type: string;
    payload: boolean;
  }
  
  export interface IAuthResponse {
    message: string;
  }
  
  export interface IAuthUser {
    profilePublicId: string | null;
    createdAt: Date | null;
    email: string | null;
    emailVerificationToken: string | null;
    emailVerified: boolean | null;
    id: number | null;
    passwordResetExpires: Date | null;
    passwordResetToken: null | null;
    profilePicture: string | null;
    updatedAt: Date | null;
    username: string | null;
  }
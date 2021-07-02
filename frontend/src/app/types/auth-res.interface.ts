import { TRANSACTION } from './transaction.interface';
import { ACCOUNT } from "./account.interface";
import { User } from "./user.interface";

export interface AUTH_RES {
    token :string,
    user:User,
    accounts:ACCOUNT[],
    transactions:TRANSACTION[]
}
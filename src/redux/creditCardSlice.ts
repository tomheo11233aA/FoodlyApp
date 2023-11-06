import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {CreditCardType} from '../datatypes/CreditCard';
export type creditCardsStateType = {
  creditCards: CreditCardType[];
};
const initialCreditCardState: creditCardsStateType = {
  creditCards: [
    {
      cvv: '123',
      name: 'Tài',
      exDate: '20/8',
      number: '625094100652859',
    },
    {
      cvv: '123',
      name: 'Sang',
      exDate: '12/2',
      number: '625094100652822',
    },
    {
      cvv: '123',
      name: 'Duy',
      exDate: '19/5',
      number: '625094100652899',
    },
  ],
};
export const creaditCardsSlice = createSlice({
  name: 'creditCard',
  initialState: initialCreditCardState,
  reducers: {
    add: (state, action: PayloadAction<CreditCardType>) => {
      state.creditCards.push(action.payload);
    },
  },
});
export const {add} = creaditCardsSlice.actions;
export default creaditCardsSlice.reducer;

import { avatarII } from "../constant/avatarII"
import { calender } from "../constant/calender"
import { svgPath } from "../constant/constants"

const {WALLENT_ROUND_SVG, SHAPE_ONE, SHAPE_TWO, WALLET_SVG, SAVINGS_ROUND, TAX_ROUND, MOBILE_ROUND, PLANE_ROUND, NAIRA_ICON, CARD_ICON, MOBILE_OUTLINE, NAIRA_OUTLINE} = svgPath

export const ACCOUNTDATA = [
    {
        account: 'PROSPA CURRENT ACCOUNT',
        cardNo: '00-00-00 18361554',
        cash: '5,234.96',
        svg: WALLENT_ROUND_SVG,
        id: 1,
        index: 0
    },
    {
        account: 'SAVINGS ACCOUNT',
        cardNo: '00-00-00 18361554',
        cash: '3,234.43',
        svg: SAVINGS_ROUND,
        id: 2,
        index: 1
    },
    {
        account: 'TAX ACCOUNT',
        cardNo: '00-00-00 18361554',
        cash: '10,234.00',
        svg: TAX_ROUND,
        id: 3,
        index: 2
    }
]

export const TRANSACTIONDATA = [
    {
        svg: PLANE_ROUND,
        data: {
            name: 'British Airways',
            type: 'travel',
            paid: false
        },
        amount: '500',
        id: 1
    },
    {
        svg: MOBILE_ROUND,
        data: {
            name: 'MTN Mobile',
            type: 'Utilty',
            paid: true
        },
        amount: '250',
        id: 2
    },
    {
        svg:NAIRA_ICON,
        data: {
            name: 'Invoice #0044',
            type: 'sales',
            paid: false
        },
        amount: '670',
        id: 3
    },
    {
        svg: avatarII,
        data: {
            name: 'Christiana Rose',
            type: 'Salary',
            paid: false
        },
        amount: '500,000',
        id: 4
    },
    {
        svg: PLANE_ROUND,
        data: {
            name: 'British Airways',
            type: 'travel',
            paid: true
        },
        amount: '500',
        id: 5
    },
    {
        svg: PLANE_ROUND,
        data: {
            name: 'British Airways',
            type: 'travel',
            paid: false
        },
        amount: '500',
        id: 6
    }
]

export const DETAIL_DATA = [
    {
        name: "Utility",
        svg: MOBILE_ROUND,
        id: 1
    },
    {
        name: "Current Account",
        svg: CARD_ICON,
        id: 2
    },
    {
        name: "Add a receipt",
        svg: NAIRA_ICON,
        id: 3
    }
]

export const DETAIL_TRANSACTION_DATA = [
    {
        name: "June total spent",
        svg: calender,
        amount: '650.12',
        id: 1,
        num: undefined
    },
    {
        name: "Transaction in July",
        svg: SHAPE_ONE,
        id: 2,
        num: '4'
    },
    {
        name: "Average spent",
        svg: SHAPE_TWO,
        amount: '250.00',
        id: 3,
        num: undefined
    }
]
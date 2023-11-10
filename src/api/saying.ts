/*
 * @Author: Dreamice dreamice13@foxmail.com
 * @Date: 2023-11-14 23:56:15
 * @LastEditors: Dreamice dreamice13@foxmail.com
 * @LastEditTime: 2023-11-14 23:56:25
 * @FilePath: \BreadNav\src\api\saying.ts
 * @Description: 
 */
import request from './request.js'

export const getSaying = () => {
    return request({
        url: 'recommendSaying',
    })
}

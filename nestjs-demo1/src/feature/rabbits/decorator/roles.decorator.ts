/*
 * @Author: tuojinxin
 * @Date: 2023-05-10 21:13:30
 * @LastEditTime: 2023-05-10 21:15:07
 * @LastEditors: tuojinxin
 * @Description: 
 */
import { SetMetadata } from "@nestjs/common/decorators"
export function Roles(...roles: string[]) {
    return SetMetadata("roles", roles)
}
import {Iphone} from "./Product";
import {Samsung} from "./Product";
import {Nokia} from "./Product";
import {Phone} from "./Product";


class QuanLy {

    static listPhone: any [] = []
    static listTotal: any [] = []

    static add(phone: Phone): void {
        QuanLy.listPhone.push(phone)
    }

    static display(): void {
        console.table(this.listPhone)
    }

    static delete(phoneID: number): void {
        for (let i = 0; i < QuanLy.listPhone.length; i++) {
            if (QuanLy.listPhone[i].phoneID === phoneID) {
                QuanLy.listPhone.splice(i, 1)
            }
        }
        QuanLy.display()
    }

    static find(name: string): void {

        let newData: object = QuanLy.listPhone.filter(element => {

                return (element.name === name)
            }
        )

        console.table(newData)
    }


    static findBrand(brand: string) {
        let newData: object = QuanLy.listPhone.filter(element => {
                return (element.brand === brand)
            }
        )

        console.table(newData)
    }


    static Total(...phone: any) {
        QuanLy.listTotal.push(...phone)
        let total: number = QuanLy.listTotal.reduce((a, b) => a + b.price, 0)
        console.table(`Tổng giá trị sản phẩm : ${total}`)
    }


    static edit(id: number, object: Phone) {
        for (let i = 0; i < this.listPhone.length; i++) {
            if (this.listPhone[i].phoneID === id) {
                this.listPhone[i] = object
            }
        }
        return this.display()
    }


    static findMax() {
        let i = Math.max(...QuanLy.listPhone.map((i) => i.price))
        return i
    }

    static findMaxPhone() {
        let phone = QuanLy.listPhone.filter(element => element.price === this.findMax())
        console.table(phone)
    }
}


let iphone12: Iphone = new Iphone(1, 20, 'Iphone12', 14_000_000, 2020)
let iphone13: Iphone = new Iphone(2, 30, 'Iphone13', 18_000_000, 2021)
let note22: Samsung = new Samsung(3, 10, 'Note22', 15_000_000, 2021)
let note22UT: Samsung = new Samsung(4, 50, 'Note22UT', 20_000_000, 2021)
let nokia1280: Nokia = new Nokia(5, 0, 'Nokia1280', 500_000, 2018)
let nokia110i: Nokia = new Nokia(6, 0, 'Nokia110I', 400_000, 2019)
let iphone14: Iphone = new Iphone(4, 35, 'Iphone14', 35_000_000, 2022)

QuanLy.add(iphone12)
QuanLy.add(iphone13)
QuanLy.add(note22)
QuanLy.add(note22UT)
QuanLy.add(nokia1280)
QuanLy.add(nokia110i)
QuanLy.display()   // Hiển thị sản phẩm
QuanLy.delete(6)  // Xóa sản phảm
QuanLy.find('Iphone13')  // Tìm sản hẩm theo tên
QuanLy.findBrand('Samsung') // Tìm sản phẩm theo brand
QuanLy.edit(1, iphone14)  // Sửa sản phẩm
QuanLy.Total(note22, note22UT)  // Tổng tiền các sản phẩm chọn mua
QuanLy.findMaxPhone() // Sản phẩm giá cao nhất
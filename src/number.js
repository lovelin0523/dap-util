/**
 * 数字相关方法
 */
module.exports = {

	/**
	 * 数字格式化
	 * @param {Number} num
	 */
	formatNumber(num) {
		if (this.isNumber(num)) {
			return num.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
		}else {
			return num
		}
	},

	/**
	 * 判断是否数字
	 * @param {Object} num
	 */
	isNumber(num) {
		if (typeof num == 'number' && !isNaN(num)) {
			return true
		} else {
			return false
		}
	},

	/**
	 * 多个数的加法运算
	 */
	add() {
		return [...arguments].reduce((num, value) => {
			let r1 = 0
			let r2 = 0
			let m = 0
			try {
				r1 = num.toString().split(".")[1].length
			} catch (e) {}
			try {
				r2 = value.toString().split(".")[1].length
			} catch (e) {}
			m = Math.pow(10, Math.max(r1, r2))
			return (num * m + value * m) / m
		})
	},

	/**
	 * 多个数的减法运算
	 */
	subtract() {
		return [...arguments].reduce((num, value) => {
			let r1 = 0
			let r2 = 0
			let m = 0
			try {
				r1 = num.toString().split(".")[1].length
			} catch (e) {}
			try {
				r2 = value.toString().split(".")[1].length
			} catch (e) {}
			m = Math.pow(10, Math.max(r1, r2))
			return (num * m - value * m) / m
		})
	},

	/**
	 * 多个数的乘法运算
	 */
	mutiply() {
		return [...arguments].reduce((num, value) => {
			let m = 0
			let s1 = num.toString()
			let s2 = value.toString()
			try {
				m += s1.split(".")[1].length
			} catch (e) {}
			try {
				m += s2.split(".")[1].length
			} catch (e) {}
			return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m)
		})

	},

	/**
	 * 多个数的除法运算
	 */
	divide() {
		return [...arguments].reduce((num, value) => {
			let t1 = 0
			let t2 = 0
			let s1 = num.toString()
			let s2 = value.toString()
			try {
				t1 = s1.split(".")[1].length
			} catch (e) {}
			try {
				t2 = s2.split(".")[1].length
			} catch (e) {}
			s1 = Number(s1.replace(".", ""))
			s2 = Number(s2.replace(".", ""))
			return (s1 / s2) * Math.pow(10, t2 - t1)
		})
	}
}

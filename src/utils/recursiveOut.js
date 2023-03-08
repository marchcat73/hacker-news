const currentArray = [
	{
		id: 1,
		level: 0,
		value: "test",
		children: [
			{
				id: 2,
				level: 1,
				value: "test",
				children: [
					{
						id: 4,
						level: 2,
						value: "test",
						children: []
					}
				]
			},
			{
				id: 3,
				level: 1,
				value: "test",
				children: []
			}
		]
	},
	{
		id: 5,
		level: 0,
		value: "test",
		children: [
			{
				id: 6,
				level: 1,
				value: "test",
				children: []
			}
		]
	},
	{
		id: 7,
		level: 0,
		value: "test",
		children: []
	}
]

const newArr = currentArray.slice()

const funcArray = (arr) => {
	return arr.map((el) => {
		el.key = "kye"
		if (el.children.length > 0) {
			funcArray(el.children)
			console.log(el.children)
		}

		return el
	})
}

// funcArray(newArr)
console.log(funcArray(newArr))

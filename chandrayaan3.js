

const indexObj = {
    "E": 0, "W": 0, "N": 1, "S": 1, "U": 2, "D": 2
}

const directionValue = {
    "N": 1, "S": -1, "E": 1, "W": -1, "U": 1, "D": -1
}

const commandValue = {
    "f": 1, "b": -1, "r": "next", "l": "pre", "u": "U", "d": "D"
}

class linkedList {
    constructor(value) {
        this.val = value
        this.next = null
        this.pre = null
    }
}
function getDirectionList() {
    const north = new linkedList("N")
    const east = new linkedList("E")
    const south = new linkedList("S")
    const west = new linkedList("W")
    north.next = east
    north.next.next = south
    north.next.next.next = west
    north.next.next.next.next = north
    north.pre = west
    north.pre.pre = south
    north.pre.pre.pre = east
    north.pre.pre.pre.pre = north
    return north
}

function getPosition(commands) {
    let directionNode = getDirectionList()
    const initialDirection = directionNode.val
    const startingPosition = [0, 0, 0]


    let direction = initialDirection
    let finalPosition = startingPosition

    for (let i = 0; i < commands.length; i++) {
        if (!commandValue) {
            continue;
        }

        if (commands[i] == "b" || commands[i] == "f") {
            finalPosition[indexObj[direction]] += (directionValue[direction] * commandValue[commands[i]])
        } else if (commands[i] == "l" || commands[i] == "r") {
            directionNode = directionNode[commandValue[commands[i]]]
            direction = directionNode.val
        } else {
            direction = commandValue[commands[i]]
        }
    }
    return { direction, finalPosition }
}

let commands = ["f", "r", "u", "b", "l"]// input
const { direction, finalPosition } = getPosition(commands)
console.log("finalPosition-", finalPosition, " direction-", direction) // output



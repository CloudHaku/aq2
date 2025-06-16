player.onChat("Aq2", function () {
    builder.teleportTo(中心)
    builder.setOrigin()
    建造器同步(方向)
    空心建築(橫寬, 縱深, 高度, 1)
    builder.teleportTo(positions.add(
    中心,
    pos(0, 高度 + 1, 0)
    ))
    builder.setOrigin()
    空心建築(橫寬, 縱深, 高度, 1)
    builder.teleportTo(中心)
    builder.setOrigin()
    空心建築(橫寬, 縱深 + 1, 高度, 1)
    for (let index = 0; index < 1; index++) {
    	
    }
    通道寬 += 1
    for (let index = 0; index < 1; index++) {
        builder.teleportTo(posLocal(通道寬, 1, 縱深))
        builder.mark()
        builder.teleportTo(posLocal(通道寬, 1, 縱深 * -1))
        builder.turn(LEFT_TURN)
        builder.fill(DISPENSER)
        builder.turn(RIGHT_TURN)
        builder.teleportToOrigin()
    }
    for (let index = 0; index < 1; index++) {
        builder.teleportTo(posLocal(通道寬 * -1, 1, 縱深))
        builder.mark()
        builder.teleportTo(posLocal(通道寬 * -1, 1, 縱深 * -1))
        builder.turn(RIGHT_TURN)
        builder.fill(DISPENSER)
        builder.turn(LEFT_TURN)
        builder.teleportToOrigin()
    }
})
function 空心建築 (寬: number, 深: number, 高: number, 磚: number) {
    builder.teleportTo(posLocal(寬, -1, 深))
    builder.mark()
    builder.teleportTo(posLocal(寬 * -1, 高 * -1, 深 * -1))
    builder.fill(GLASS)
    builder.teleportToOrigin()
    builder.teleportTo(posLocal(寬 - 1, (高 - -1) * -1, 深 - 1))
    builder.mark()
    builder.teleportTo(posLocal((寬 - 1) * -1, -2, (深 - 1) * -1))
    builder.fill(AIR)
    builder.teleportToOrigin()
}
function 畫一條直線 (寬: number, 深: number, 高: number, 磚: number) {
    builder.teleportTo(posLocal(寬, 1, 深))
    builder.mark()
    builder.teleportTo(posLocal(寬, 1, 深 * -1))
    builder.turn(LEFT_TURN)
    builder.fill(DAYLIGHT_SENSOR)
    builder.turn(RIGHT_TURN)
    builder.teleportToOrigin()
    builder.teleportTo(posLocal(0, 1, 深))
    builder.mark()
    builder.teleportTo(posLocal(寬, 1, 深 * -1))
    builder.turn(LEFT_TURN)
    builder.fill(DAYLIGHT_SENSOR)
    builder.turn(RIGHT_TURN)
    builder.teleportToOrigin()
}
function 建造器同步 (方位: number) {
    if (positions.toCompassDirection(方位) == 0) {
        builder.face(SOUTH)
    } else if (positions.toCompassDirection(方位) == 1) {
        builder.face(EAST)
    } else if (positions.toCompassDirection(方位) == -1) {
        builder.face(WEST)
    } else {
        builder.face(NORTH)
    }
}
player.onChat("Aq", function () {
    builder.teleportTo(中心)
    builder.setOrigin()
    建造器同步(方向)
    for (let index = 0; index < 1; index++) {
        builder.teleportTo(posLocal(橫寬, 高度 * -1, 縱深))
        builder.mark()
        builder.teleportTo(posLocal(橫寬 * -1, -1, 縱深 * -1))
        builder.fill(GLASS)
        builder.teleportToOrigin()
        高度 += -1
        橫寬 += -1
        縱深 += -1
    }
    for (let index = 0; index < 1; index++) {
        builder.teleportTo(posLocal(橫寬, 高度 * -1, 縱深))
        builder.mark()
        builder.teleportTo(posLocal(橫寬 * -1, -2, 縱深 * -1))
        builder.fill(AIR)
        builder.teleportToOrigin()
        高度 += 1
        橫寬 += 1
        縱深 += 1
    }
    for (let index = 0; index < 1; index++) {
        builder.teleportTo(posLocal(橫寬, 高度 * 1, 縱深))
        builder.mark()
        builder.teleportTo(posLocal(橫寬 * -1, 0, 縱深 * -1))
        builder.fill(GLASS)
        builder.teleportToOrigin()
        高度 += -1
        橫寬 += -1
        縱深 += -1
    }
    for (let index = 0; index < 1; index++) {
        builder.teleportTo(posLocal(橫寬, 高度 * 1, 縱深))
        builder.mark()
        builder.teleportTo(posLocal(橫寬 * -1, 0, 縱深 * -1))
        builder.fill(AIR)
        builder.teleportToOrigin()
        高度 += 1
        橫寬 += 1
        縱深 += 1
    }
    for (let index = 0; index < 1; index++) {
        builder.teleportTo(posLocal(通道寬, 通道寬 * 2, 通道寬))
        builder.mark()
        builder.teleportTo(posLocal(通道寬 * -1, 0, 通道寬 * -1))
        builder.fill(GLASS)
        builder.teleportToOrigin()
        通道寬 += -1
    }
    for (let index = 0; index < 1; index++) {
        builder.teleportTo(posLocal(通道寬, 通道寬 * 2, 縱深))
        builder.mark()
        builder.teleportTo(posLocal(通道寬 * -1, 0, 縱深 * -1))
        builder.fill(AIR)
        builder.teleportToOrigin()
        通道寬 += 1
    }
    for (let index = 0; index < 1; index++) {
        builder.teleportTo(posLocal(通道寬, 1, 縱深))
        builder.mark()
        builder.teleportTo(posLocal(通道寬, 1, 縱深 * -1))
        builder.turn(LEFT_TURN)
        builder.fill(DAYLIGHT_SENSOR)
        builder.turn(RIGHT_TURN)
        builder.teleportToOrigin()
    }
    通道寬 += 1
    for (let index = 0; index < 1; index++) {
        builder.teleportTo(posLocal(通道寬, 1, 縱深))
        builder.mark()
        builder.teleportTo(posLocal(通道寬, 1, 縱深 * -1))
        builder.turn(LEFT_TURN)
        builder.fill(DISPENSER)
        builder.turn(RIGHT_TURN)
        builder.teleportToOrigin()
    }
    for (let index = 0; index < 1; index++) {
        builder.teleportTo(posLocal(通道寬 * -1, 1, 縱深))
        builder.mark()
        builder.teleportTo(posLocal(通道寬 * -1, 1, 縱深 * -1))
        builder.turn(RIGHT_TURN)
        builder.fill(DISPENSER)
        builder.turn(LEFT_TURN)
        builder.teleportToOrigin()
    }
})
let 通道寬 = 0
let 高度 = 0
let 縱深 = 0
let 橫寬 = 0
let 方向: CompassDirection = null
let 中心: Position = null
中心 = player.position()
方向 = positions.toCompassDirection(player.getOrientation())
agent.teleportToPlayer()
player.say(agent.getOrientation())

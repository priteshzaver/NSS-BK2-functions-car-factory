const createChassis = () => {
	const newChassisObject = {	}

	return newChassisObject
}


const addEngine = (nextChassis) => {
    nextChassis.engine = "4.8L"
    
    return nextChassis
}

const addSteeringWheel = (steeringChassis) => {
    steeringChassis.steeringWheel = "Tilting"

    return steeringChassis
}

const addBody = (chassisObject) => {
    // Use dot notation to add a new property
	chassisObject.body = "Fever"
    
	// Return the chassis that now has a body property on it
	return chassisObject
}

const addDriveTrain = (driveTrainChassis) => {
    driveTrainChassis.driveTrain = "Two wheel drive"

    return driveTrainChassis
}

const addWheels = (originalChassis) => {
    originalChassis.wheels = 4

    return originalChassis
}


const chassis = createChassis()
const withWheels = addWheels(chassis)
const withEngine = addEngine(withWheels)
const withSteering = addSteeringWheel(withEngine)
const withBody = addBody(withSteering)
const withDriveTrain = addDriveTrain(withBody)

console.log(withDriveTrain)
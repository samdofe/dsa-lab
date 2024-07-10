function minPLatform(arrivals, departures) {
    // Sort the arrival and departure arrays
    arrivals.sort((a, b) => a - b);
    departures.sort((a, b) => a - b);

    let platformsNeeded = 0;
    let maxPlatforms = 0;

    let i = 0; // Pointer to traverse the arrivals
    let j = 0; // Pointer to traverse the departures

    while (i < arrivals.length && j < departures.length) {
        // If the next event is an arrival, increment platformsNeeded
        if (arrivals[i] <= departures[j]) {
            platformsNeeded++;
            i++;
        } else {
            // If the next event is a departure, decrement platformsNeeded
            platformsNeeded--;
            j++;
        }

        // Update the maximum platforms needed
        maxPlatforms = Math.max(maxPlatforms, platformsNeeded);
    }

    return maxPlatforms;
}

const arrivals = [900, 940, 950, 1100, 1500, 1800];
const departures = [910, 1200, 1120, 1130, 1900, 2000];

//output : 3

console.log(minPLatform(arrivals, departures));

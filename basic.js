function crystalGazer (job_title, location, partners_name, number_childrens) {
    console.log ("You will be a " + job_title + " in " + location + " and married to " + partners_name + " with " + number_childrens + ".")
}

crystalGazer("burger", "sewer", "Lighning McQueen", "23")

function ageCalculator (birth_year, current_year) {
    console.log(`You are either ${current_year-birth_year} or ${current_year-birth_year-1}`)
}

ageCalculator (1994, 2021)

function improvedAgeCalculator (birth_year) {
    console.log(`You are either ${2021-birth_year} or ${2021-birth_year-1}`)
}

improvedAgeCalculator (1994)

function degreeToRadian (degrees) {
    console.log(`${degrees} are ${degrees * (Math.PI/180)}`)
}

degreeToRadian (90)

function areaAndVolume (widht, height, depth) {
    console.log(`The area of the box is: ${widht*height}`)
    console.log(`The volume of the box is: ${widht*height*depth}`)
}

areaAndVolume (2,7,5)
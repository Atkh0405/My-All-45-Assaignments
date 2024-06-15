/*
Question #45;Cars:
         Write a function that stores information about a car in a Object. The function should always receive a
         manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the
         function with the required information and two other name-value pairs, such as a color or an optional
         feature. Print the Object that’s returned to make sure all the information was stored correctly.
*/
function Car_Info(manufacturer, model_Name, ...extraoption) {
    let CarInfo = {
        manufacturer,
        model_Name,
        ...Object.assign({}, ...extraoption)
    };
    return CarInfo;
}
console.log(Car_Info("Haonda", "Civic", { color: "Black" }, { features: ["Sunroof", "Electronic Parking Brakes", "Parking Sensors"] }));
export {};
let cylinder={
	radius: 3,
	height:10,


	volume: function(){
		return (this.radius*this.radius*3)*height;
	},
	area: function(){
		2*(this.radius*this.radius*3)+(2*3*radius*height);
	}
}

function print(object) {
    for (let propertyName in object) {
        let property = object[propertyName];
        console.log("name: " + propertyName + "\nvalue:" + property + "\ntype:" + typeof property + "\n");
    }
}

printProperties(cylinder);
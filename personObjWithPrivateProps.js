const person = createPerson("Alice", 30);

function createPerson(name, age) {
    let personName = name;
    let personAge = age;

    return {
        getName() {
            return personName;
        },
        getAge() {
            return personAge;
        },
        setName(newName) {
            return personName = newName
        },
        setAge(newAge) {
            return personAge = newAge;
        }
    }
}

person.getName();
person.getAge();
person.setName("Bob");
person.setAge(25);
person.getName();
person.getAge();

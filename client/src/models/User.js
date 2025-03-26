class User {
    constructor(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }

    // Static method to create a User instance from a plain object
    static fromObject(obj) {
        return new User(obj.name, obj.email, obj.age);
    }

    // Method to serialize the User instance to a plain object
    toObject() {
        return {
            name: this.name,
            email: this.email,
            age: this.age,
        };
    }
}

export default User;

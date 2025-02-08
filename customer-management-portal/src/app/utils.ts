  export const nameGenerator = (firstName: string, lastName: string) => {
    return (`${firstName} ${lastName}`)
  }

  export const nameInitialGenerator = (firstName: string, lastName: string) => {
    return firstName.charAt(0), lastName.charAt(0)
  }
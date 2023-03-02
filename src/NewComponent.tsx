type NewComponentPropsType = {
    studets: Array<StudetsType>
}

type  StudetsType = {
    id: number
    name: string
    age: number
}

export const NewComponent = (props: NewComponentPropsType) => {
    return (
      <ul>
          {props.studets.map((studetsArrayObject:StudetsType, index:number) =>{
              return(
                  <li key={studetsArrayObject.id}>
                      <span>{studetsArrayObject.name}</span>
                      <span> age : {studetsArrayObject.age}</span>

                  </li>
              )
          })}
      </ul>
    );
}


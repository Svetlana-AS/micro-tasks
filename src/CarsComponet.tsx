type CarsComponentPropsType = {
    cars: Array<CarsType>
}

type  CarsType = {
    manufacturer: string
    model: string

}

export const CarsComponent = (props: CarsComponentPropsType) => {
    return (
        <table>
            {props.cars.map((carsArrayObject: CarsType, index: number) => {
                return (
                    <tbody>
                    <tr>
                        <td>{carsArrayObject.manufacturer}</td>
                        <td>{carsArrayObject.model}</td>
                    </tr>
                    </tbody>

                )
            })}
        </table>
    );

};


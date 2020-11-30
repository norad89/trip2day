import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Link from "next/link";

const AddCardViaggio = (props) => {
    const [list, setList] = useState([]);
    const [value, setValue] = useState('')

    function handleChange(event) {
        setValue(event.target.value);
    }


    useEffect(() => {
        fetch("http://localhost:3001/").then((response) => {
            response.json().then((content) => {
                setList([...content.cardViaggio]);
            });
        });
    }, []);

    return (
        <div>
            <Button
                onChange={handleChange}
                onClick={() => {
                    fetch("http://localhost:3001/", { method: "POST" }).then(
                        (response) => {
                            response.json().then((content) => {
                                setList([...content.cardViaggio]);
                                // this.setState({ list: content.robaccia });
                            });
                        }
                    );
                }}
            >
                <Link href="./PlannedTrips">Inizia il tuo nuovo viaggio!1</Link>
            </Button>
        </div>
    );
};

export default AddCardViaggio
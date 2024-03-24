import { FormGroup, Input, Label } from "reactstrap";
import { useGetActivitiesByDestinationIdQuery } from "../services/destination";

const ActivitiesDropDown = ({ setTripForm, TripForm }) => {

    const associtedActivitiesData = useGetActivitiesByDestinationIdQuery({ id: TripForm.destination_id });

    return <FormGroup>
        <Label for="activity">Activity</Label>
        <Input
            required
            id="activity"
            name="activity_id"
            value={TripForm.activity_id}
            type="select"
            onChange={(e) =>
                setTripForm({ ...TripForm, [e.target.name]: e.target.value })
            }
        >
            <option value={-1}>Chose Activity</option>
            {associtedActivitiesData?.data?.map((activity) => (
                <option value={activity.id}>{activity.name}</option>
            ))}
        </Input>
    </FormGroup>
}

export default ActivitiesDropDown
import { Activity } from "../../../app/models/activity";
import { Button, Item, ItemContent, ItemDescription, Label, Segment } from "semantic-ui-react";

interface Props {
    activities: Activity[];
    selectActivity: (id: string) => void;
    deleteActivity: (id: string) => void;
}

export default function ActivityList({ activities, selectActivity, deleteActivity }: Props) {
    return (
        <Segment>
            <Item.Group divided>
                {activities.map(activity => (
                    <Item key={activity.id}>
                        <ItemContent>
                            <Item.Header as='a'>{activity.title}</Item.Header>
                            <Item.Meta>{activity.date}</Item.Meta>
                            <ItemDescription>
                                <div>
                                    {activity.description}
                                </div>
                                <div>
                                    {activity.city}, {activity.venue}
                                </div>
                            </ItemDescription>
                            <Item.Extra>
                                <Button onClick={() => selectActivity(activity.id)} floated='right' content='View' color='purple' />
                                <Button onClick={() => deleteActivity(activity.id)} floated='right' content='Delete' color='red' />
                                <Label basic content={activity.category} />
                                    
                              
                            </Item.Extra>

                        </ItemContent>

                    </Item>
                ))};

            </Item.Group>
        </Segment>
    )
}
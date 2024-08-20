import { Activity } from "../../../app/models/activity";
import { Button, Item, ItemContent, ItemDescription, Label, Segment } from "semantic-ui-react";

interface Props {
    activities: Activity[];
}

export default function ActivityList({ activities }: Props) {
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
                                <Button floated='right' content='View' color='purple' />
                                <Label basic content={activity.category} />
                                    
                              
                            </Item.Extra>

                        </ItemContent>

                    </Item>
                ))};

            </Item.Group>
        </Segment>
    )
}
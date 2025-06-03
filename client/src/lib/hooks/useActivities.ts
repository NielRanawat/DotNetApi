import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import agent from "../api/agent";

export default function useActivities() {
    const queryClient = useQueryClient();

    const { data: activities, isPending } = useQuery({
        queryKey: ['activities'],
        queryFn: async () => {
            const response = await agent.get<Activity[]>("/activities")
            return response.data;
        }
    })

    const updateActivity = useMutation({
        mutationFn: async (activity : Activity) => {
            await agent.put("/activities" , activity)
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({
                queryKey : ['activities']
            })
        }
    })

    const createActivity = useMutation({
        mutationFn: async (activity : Activity) => {
            await agent.post("/activities" , activity)
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({
                queryKey : ['activities']
            })
        }
    })
    
    const deleteActivity = useMutation({
        mutationFn: async (activity : Activity) => {
            await agent.delete(`/activities/${activity.id}`)
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({
                queryKey : ['activities']
            })
        }
    })
    return { activities, isPending , updateActivity , createActivity , deleteActivity};
}
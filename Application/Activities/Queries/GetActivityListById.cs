using System;
using Domain;
using MediatR;
using Persistence;

namespace Application.Activities.Queries;

public class GetActivityListById
{
    public class Query() : IRequest<Activity>
    {
        public required string id;    
    }

    public class Handler(AppDbContext context) : IRequestHandler<Query, Activity>
    {
        public async Task<Activity> Handle(Query request, CancellationToken cancellationToken)
        {
            var activity = await context.Activities.FindAsync([request.id], cancellationToken);
            if (activity == null) throw new Exception("Not fouund");
            return activity;
        }
    }
}

using Application.Activities;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class ActivitiesController : BaseApiController
    {
   

        // public ActivitiesController(IMediator mediator)
        // {
        //     _mediator = mediator;
        // }
        [HttpGet] //api/activities
        public async Task<ActionResult<List<Domain.Activity>>> GetActivities(){
            return await Mediator.Send(new List.Query());
        }
        [HttpGet("{id}")]
        public ActionResult<Domain.Activity> GetActivity(Guid id)
        {
            return Ok();
        }

        // private ActionResult<Activity> Ok()
        // {
        //     throw new NotImplementedException();
        // }
    }
}
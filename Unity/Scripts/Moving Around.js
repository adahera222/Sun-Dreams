var speed = 6.0;
var rotateSpeed = 3.0;
var bullitPrefab:Transform;
private var dead = false;

function OnControllerColliderHit(hit : ControllerColliderHit)
{
	if(hit.gameObject.tag == "fallout")
	{
		dead = true;
		//subtract life here
	}
}

function Update()
{
    var controller : CharacterController = GetComponent(CharacterController);
	transform.Rotate(0, Input.GetAxis ("Horizontal") * rotateSpeed, 0);

   	var forward = transform.TransformDirection(Vector3.forward);
   	var curSpeed = speed * Input.GetAxis ("Vertical");
   	
   	controller.SimpleMove(forward * curSpeed);
   	
	if(Input.GetButtonDown("Jump"))
    {
    	var bullit = Instantiate(bullitPrefab, 
    							GameObject.Find("Spawn Point").transform.position, 
    							Quaternion.identity); 
    	bullit.rigidbody.AddForce(transform.forward * 2000);
    	
    }
}

function LateUpdate()
{
	if(dead)
	{
		transform.position = Vector3(0,4,0);
		gameObject.Find("Main Camera").transform.position = Vector3(0,4,-10);
		dead = false;
	}
}

@script RequireComponent(CharacterController)
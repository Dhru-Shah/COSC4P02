using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.EventSystems;

public class ClickButton : MonoBehaviour
{
    public GameObject Image1;
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        if (Input.GetMouseButtonDown(0)){
            print("Clicked");
        }
        if (Input.GetMouseButtonUp(0)){
            print("Click is off");
        }
    }
    GameObject getClickedObject(out RaycastHit hit){
        GameObject target = null;
        Ray ray = Camera.main.ScreenPointToRay (Input.mousePosition);
        if(Physics.Raycast (ray.origin, ray.direction* 10, out hit)){
            if(!isPointOverUIObject()){ target= hit.collider.gameObject; }
        }
        return target;
    }
    private bool isPointOverUIObject(){
        PointerEventData ped = new PointerEventData(EventSystem.current);
        ped.position = new Vector2(Input.mousePosition.x, Input.mousePosition.y);
        List<RaycastResult> results = new List<RaycastResult>();
        EventSystem.current.RaycastAll(ped,results);
        return results.Count >0;
    }
}

using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json;
using System.Runtime.InteropServices;
public class ShowJoystick : MonoBehaviour

{
    public bool joystickNeed;
    string joystick = @"
    { 'show':'false'}
";

    [DllImport("__Internal")]
    private static extern void GetDevice(string path, string objectName, string callback, string fallback);

    // Start is called before the first frame update
    void Start()
    {
#if UNITY_WEBGL && !UNITY_EDITOR
        GetDevice("example", gameObject.name, "OnRequestSuccess", "OnRequestFail");
#endif
        // OnRequestSuccess(joystick);

        if (!joystickNeed)
        {
            Destroy(transform.gameObject);
        }
    }

    private void OnRequestSuccess(string data)
    {
        this.joystick = data;
        var joyShow = JObject.Parse(this.joystick);
        this.joystickNeed = joyShow.SelectToken("show").Value<bool>();
        // print(this.joystickNeed);
    }

    private void OnRequestFail(string data)
    {
        print(data);
    }
}

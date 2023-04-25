using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using System.Runtime.InteropServices;
using UnityEngine.UI;
public class TestDatabase : MonoBehaviour
{
    public Text text;

    [DllImport("__Internal")]
    private static extern void GetJSON(string path, string objectName, string callback, string fallback);

    void Start()
    {
#if UNITY_WEBGL && !UNITY_EDITOR
        GetJSON("example", gameObject.name, "OnRequestSuccess", "OnRequestFail");
#endif
    }

    private void OnRequestSuccess(string data)
    {
        //text.color = Color.green;
        //  text.text = data;
    }
    private void OnRequestFail(string data)
    {
        //  text.color = Color.red;
        //    text.text = data;
    }
}

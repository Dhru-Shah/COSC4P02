using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json;
using System.Runtime.InteropServices;
public class ExitButton : MonoBehaviour
{
    public bool closeAll;
    string closeApplication = @"
    { 'close':'false'}
";

    [DllImport("__Internal")]
    private static extern void GetQuit(string path, string objectName, string callback, string fallback);
    private void Update()
    {
#if UNITY_WEBGL && !UNITY_EDITOR
        GetQuit("example", gameObject.name, "OnRequestSuccess", "OnRequestFail");
#endif
        if (this.closeAll)
        {
            Application.Quit();
        }
    }
    public void QuitGame()
    {
        SceneManager.LoadScene(SceneManager.GetActiveScene().buildIndex - 1);
        Application.Quit();
    }

    private void OnRequestSuccess(string data)
    {
        this.closeApplication = data;
        var closeData = JObject.Parse(this.closeApplication);
        this.closeAll = closeData.SelectToken("close").Value<bool>();
        // print(this.joystickNeed);
    }

    private void OnRequestFail(string data)
    {
        print(data);
    }
}

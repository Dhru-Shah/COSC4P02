using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json;
using System.Runtime.InteropServices;

public class RemoveArtifacts : MonoBehaviour
{

    string json = @"[
   { 'Name': 'Sphere', 'Data': 'This is data for Sphere.' },
    { 'Name': 'Artillery_V1', 'Data': 'This is data for Artillery_V1.' },
    { 'Name': 'letter', 'Data': 'This is data for letter.' },
    { 'Name': 'Coin1', 'Data': 'This is data for Coin1.' },
    { 'Name': 'Coin2', 'Data': 'This is data for Coin2.' },
    { 'Name': 'Coin3', 'Data': 'This is data for Coin3.' },
    { 'Name': 'Coin4', 'Data': 'This is data for Coin4.' },
    { 'Name': 'Coin5', 'Data': 'This is data for Coin5.' },
    { 'Name': 'Coin6', 'Data': 'This is data for Coin6.' },
    { 'Name': 'Uniform', 'Data': 'This is data for Uniform1.' },
    { 'Name': 'Uniform2', 'Data': 'This is data for Uniform2.' },
    {'Name': 'Image2', 'Data': 'This is data for Potrait.'},
      {'Name': 'Painting1', 'Data': 'This is data for Painting1.'},
       {'Name': 'Painting2', 'Data': 'This is data for Painting2.'},
        {'Name': 'Painting3', 'Data': 'This is data for Painting3.'},
         {'Name': 'Painting4', 'Data': 'This is data for Painting4.'},
          {'Name': 'Painting5', 'Data': 'This is data for Painting5.'},
           {'Name': 'Painting6', 'Data': 'This is data for Painting6.'},
            {'Name': 'Painting7', 'Data': 'This is data for Painting7.'},
             {'Name': 'Painting8', 'Data': 'This is data for Painting8.'},
              {'Name': 'Painting9', 'Data': 'This is data for Painting9.'},
               {'Name': 'Painting10', 'Data': 'This is data for Painting10.'},
                {'Name': 'Painting11', 'Data': 'This is data for Painting11.'},
                 {'Name': 'Painting12', 'Data': 'This is data for Painting12.'},
                  {'Name': 'Painting13', 'Data': 'This is data for Painting13.'},
                   {'Name': 'Painting14', 'Data': 'This is data for Painting14.'},
                    {'Name': 'Painting15', 'Data': 'This is data for Painting15.'},
                     {'Name': 'Painting16', 'Data': 'This is data for Painting16.'},
                      {'Name': 'Painting17', 'Data': 'This is data for Painting17.'},
                       { 'Name': 'Painting18', 'Data': 'This is data for Painting18.' },
    { 'Name': 'Painting19', 'Data': 'This is data for Painting19.' },
    { 'Name': 'Potrait3', 'Data': 'This is data for Potrait3.' },
    {'Name': 'Coinboard', 'Data': ''}
]";


    [DllImport("__Internal")]
    private static extern void GetJSON(string path, string objectName, string callback, string fallback);

    public List<Artifact> artifacts;

    // Start is called before the first frame update
    void Start()
    {
#if UNITY_WEBGL && !UNITY_EDITOR
        GetJSON("example", gameObject.name, "OnRequestSuccess", "OnRequestFail");
#endif

        foreach (Transform child in transform)
        {
            this.artifacts = JsonConvert.DeserializeObject<List<Artifact>>(json);

            if (artifacts.Count > 0)
            {
                Artifact artifact = this.artifacts.Find(artifact => artifact.Name == child.name);
                if (artifact == null)
                {
                    Destroy(child.gameObject);
                }
            }
        }
    }


    private void OnRequestSuccess(string data)
    {
        // text.color = Color.green;
        this.json = data;
        this.artifacts = JsonConvert.DeserializeObject<List<Artifact>>(json);
    }
    private void OnRequestFail(string data)
    {
        print(data);
    }
}

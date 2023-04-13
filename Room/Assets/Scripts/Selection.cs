using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.EventSystems;
using System.Runtime.InteropServices;
using UnityEngine.UI;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json;

public class Artifact
{
    public string Name { get; set; }
    public string Data { get; set; }
}
public class Selection : MonoBehaviour
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
    public Text text;

    [DllImport("__Internal")]
    private static extern void GetJSON(string path, string objectName, string callback, string fallback);
    public Material highlightMaterial;
    public Material selectionMaterial;
    private Material originalMaterialHighlight;
    private Material originalMaterialSelection;
    private Transform highlight;
    private Transform selection;
    private RaycastHit raycastHit;
    private List<Artifact> artifacts;
    private void Start()
    {
#if UNITY_WEBGL && !UNITY_EDITOR
        GetJSON("example", gameObject.name, "OnRequestSuccess", "OnRequestFail");
#endif
    }

    void Update()
    {
        // Highlight
        if (highlight != null)
        {
            highlight.GetComponent<MeshRenderer>().sharedMaterial = originalMaterialHighlight;
            highlight = null;
        }
        Ray ray = Camera.main.ScreenPointToRay(Input.mousePosition);
        if (!EventSystem.current.IsPointerOverGameObject() && Physics.Raycast(ray, out raycastHit)) //Make sure you have EventSystem in the hierarchy before using EventSystem
        {
            highlight = raycastHit.transform;
            if (highlight.CompareTag("Selectable") && highlight != selection)
            {
                if (highlight.GetComponent<MeshRenderer>().material != highlightMaterial)
                {
                    originalMaterialHighlight = highlight.GetComponent<MeshRenderer>().material;
                    highlight.GetComponent<MeshRenderer>().material = highlightMaterial;
                }
            }
            else
            {
                highlight = null;
            }
        }

        // Selection
        if (Input.GetMouseButtonDown(0) && !EventSystem.current.IsPointerOverGameObject())
        {
            if (highlight)
            {
                if (selection != null)
                {
                    selection.GetComponent<MeshRenderer>().material = originalMaterialSelection;
                }
                selection = raycastHit.transform;
                if (selection.GetComponent<MeshRenderer>().material != selectionMaterial)
                {
                    originalMaterialSelection = originalMaterialHighlight;
                    selection.GetComponent<MeshRenderer>().material = selectionMaterial;
                }

                this.artifacts = JsonConvert.DeserializeObject<List<Artifact>>(json);

                Artifact artifact = artifacts.Find(artifact => artifact.Name == highlight.gameObject.name);
                if (artifact != null)
                {
                    text.text = artifact.Data;
                }

                highlight = null;
                //print("Object is clicked");
            }
            else
            {
                if (selection)
                {
                    selection.GetComponent<MeshRenderer>().material = originalMaterialSelection;
                    selection = null;
                    text.text = null;
                    // print("Object Click is off");
                }

            }
        }

    }
    private void OnRequestSuccess(string data)
    {
        // text.color = Color.green;
        this.json = data;
        this.artifacts = JsonConvert.DeserializeObject<List<Artifact>>(json);
        //this.artifacts = JsonConvert.DeserializeObject<List<Artifact>>(data); ;
    }
    private void OnRequestFail(string data)
    {
        // text.color = Color.red;
        // text.text = "Fail to load data!";
        print(data);
    }
}
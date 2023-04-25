using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerMovement : MonoBehaviour
{
    public CharacterController controller;
    public float speed = 5f;
    public AudioSource moveSound;
    public float _rotationSpeed = 30;

    public Joystick joy;
    // Update is called once per frame
    void Update()
    {
        Input.multiTouchEnabled = false;

        float horizontalInput = Input.GetAxis("Horizontal");
        float verticalInput = Input.GetAxis("Vertical");

        float joyHor = joy.Horizontal * speed;
        float joyVer = joy.Vertical * speed;

        Vector3 move = transform.right * horizontalInput + transform.forward * verticalInput;

        Vector3 newMove = transform.right * joyHor + transform.forward * joyVer;
        Vector3 rotation = new Vector3(0, Input.GetAxisRaw("Horizontal") * _rotationSpeed * Time.deltaTime, 0);

        transform.TransformDirection(move);
        transform.Rotate(rotation);

        controller.Move(newMove * speed * Time.deltaTime);
        controller.Move(move * speed * Time.deltaTime);

        if (move.magnitude >= 0.2f || newMove.magnitude >= 0.2f)
        {
            if (moveSound.isPlaying == false)
            {
                //# Asssume it's not playing (eg: stopped, ended, not started, etc)
                moveSound.Play();
            }
        }
    }
}

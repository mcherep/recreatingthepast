#include "ofApp.h"

//--------------------------------------------------------------
void ofApp::setup(){

}

//--------------------------------------------------------------
void ofApp::update(){

}

//--------------------------------------------------------------
void ofApp::draw(){
    // Broken white background
    ofBackground(212,207,212);

    // Turn on alpha blending
    ofEnableAlphaBlending();

    // Sets the mode for drawing rectangles and other rectangular objects
    ofSetRectMode(OF_RECTMODE_CENTER);

    // Structure params
    int rows = 3;
    int n_rectangles = 19;

    // Texture points
    int n_texture = 3000;

    // Rectangle size
    int r_width = 35;
    int r_height = 140;

    // Corner dot size
    int d_width = 3;
    int d_height = 2;
    int radius = 1;

    ofSeedRandom(mouseX);
    // Create the x-axis offsets here so that all rows share the same one
    float x_offsets[3] = {ofRandom(-2, 2), ofRandom(-2, 2), ofRandom(-2, 2)};
    for (int i = 0; i < n_rectangles; i++){
        for (int j = 0; j < rows; j++){
            // Adding small offset to x axis, but keeping it the same for each row
            float x = ofMap(i, 0, n_rectangles-1, 200 + x_offsets[j], 850 + x_offsets[j]);

            // ofMap for as many rows and rectangles indexing at 0
            // We add randomness to the y axis
            float y = ofMap(j, 0, rows-1, 200 + ofRandom(-20, 20), 500 + ofRandom(-20, 20));

            // Light pink noise using alpha
            float alpha = 0.1;
            ofSetColor(230, 66, 95, alpha*255);

            // Draw small circles to simulate the texture
            for (int k=0; k < n_texture; k++){
                ofDrawCircle(x + ofRandom(-r_width/2,r_width/2), y + ofRandom(-r_height/2,r_height/2),
                             radius);
            }

            // Dark pink "dot" in the top left corner
            ofSetColor(139, 0, 45);
            ofDrawRectangle(x - (r_width-d_width)/2, y - (r_height-d_height)/2, d_width, d_height);

            // Pink rectangles using alpha
            alpha = 0.6;
            ofSetColor(230, 66, 95, alpha*255);

            // Give coordinates (x, y) and width, height
            ofDrawRectangle(x, y, r_width, r_height);
            }
        }
}

//--------------------------------------------------------------
void ofApp::keyPressed(int key){

}

//--------------------------------------------------------------
void ofApp::keyReleased(int key){

}

//--------------------------------------------------------------
void ofApp::mouseMoved(int x, int y ){

}

//--------------------------------------------------------------
void ofApp::mouseDragged(int x, int y, int button){

}

//--------------------------------------------------------------
void ofApp::mousePressed(int x, int y, int button){

}

//--------------------------------------------------------------
void ofApp::mouseReleased(int x, int y, int button){

}

//--------------------------------------------------------------
void ofApp::mouseEntered(int x, int y){

}

//--------------------------------------------------------------
void ofApp::mouseExited(int x, int y){

}

//--------------------------------------------------------------
void ofApp::windowResized(int w, int h){

}

//--------------------------------------------------------------
void ofApp::gotMessage(ofMessage msg){

}

//--------------------------------------------------------------
void ofApp::dragEvent(ofDragInfo dragInfo){

}

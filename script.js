<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>shareable Resume Builder</title>
    <link rel="stylesheet" href="style.css">

</head>
<body>
    <h1>shareable Resume Builder By Naveed Ahmed Farooqi</h1>
    <form id="resumeform">
        <fieldset>
<legend>Personal Information </legend>

<label for="username">UserName: </label>
<input type="text" id="username" name="username" required>
   

<label for="email">Email: </label>
<input type="email id="email" name="email" required>
 
 
 <label for="phone">phone: </label>
 <input type="tel"phone" id="phone" name="phone" required>


</fieldset>
<legend>Education</legend>
<label for="education">Education</label>
<textarea id="education" name-"education" rows="4" required> </textarea> <br>

</fieldset>
<legend>Experience</legend>
<label for="experience">Experience</label>
<textarea id="experience" name-"experience" rows="4" required> </textarea> <br>

</fieldset>
<legend>Skills</legend>
<label for="skills">skills</label>
<textarea id="skills" name-"skills" rows="4" required> </textarea> <br>

<button type="submit"> Generate Resume Below</button>
    </form>
    <br>

    <!-- Dynamic and Editable Resume -->
     <div id="resum-dispaly" contenteditable="true">
        <!-- Resume will be generate below -->
         </div>

         <br>
    
    <!-- section for the shareable link and download option -->

    <div id="shareable-link-container" style="display: none;">
        <h2>shareable link</h2>
        <p>what is your unique link to view or edit your resume:</p>
        <a> href="#" id="shareable link" target="_black"></a>
        <br>
        <button> id="download-pdf"><b>download as pdf</b></button>

         <script src="script.js"></script>

         
</body>
</html>

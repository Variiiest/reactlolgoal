
export const BlogData = [
    {

      title: "Basic Django and DRF",
      about: "In this tutorial we are going to talk about the installation process of Django and DRF.",
      slug: "basic-installation-django-django-rest-framework",
      body:`<article class="text-lg">
      <div class="max-w-3xl mx-auto">
        <p class="mb-4">Before we are going to learn about Django, Let's discuss some advantages and disadvantages.</p>
       
     <p class="mb-4 text-2xl font-bold">Advantages of Django:</p>
        <p class="mb-4">
    <span class="text-xl font-bold leading-relaxed text-green-200">Object-Relational Mapping (ORM) </span>− The Django web framework provides a default object-relational mapping layer (ORM) that is used to interact with application data from various relational databases such as SQLite, PostgreSQL, and MySQL. Django also supports the NoSQL database.
        </p>
        <p class="mb-4">
        <span class="text-xl font-bold leading-relaxed text-green-200"> Administration GUI </span>− Django comes with an intractable admin interface.
        </p>
        <p class="mb-4">
          
        <span class="text-xl font-bold leading-relaxed text-green-200">Django Docs −
        </span> Django project has a lot of tutorials and some other resources to solve every issue. 
    
        </p>
    <p class="mb-4">
    <span class="text-xl font-bold leading-relaxed text-green-200">Django Packages  − 
    </span>Django also has Django packages, some are paid and some are opensource. Because of this reason, Django provides a rapid development process to the application.
    
        </p>
     <p class="mb-4 mt-4 text-2xl font-bold"> Disadvantages of Django:</p>
    
    <p class="mb-4">We will learn about the disadvantages in the last lesson.  Don't worry If your project submission deadline is near choose this for fast development.
    </p>
    
    <p class="text-xl font-bold leading-relaxed text-green-200">Installation of Django :</p>
    <p class="mb-4">If you have python installed and also set python as an environment variable in the system.
    Open the Command prompt and install</p>
     <p class="bg-gray-900 px-2 py-2 rounded overflow-y-scroll scroll-hidden overflow-auto">
    pip install django
     </p>
    
    <p class="mb-4 mt-4">
    And after some time (depend on your network speed) Django will be installed in your system.
    Now open your command prompt and run python and import Django.
    </p>
    
    <div class="bg-gray-900 px-2 py-2 rounded overflow-y-scroll scroll-hidden overflow-auto">
    import django
    <p>
    django.get_version()</p>
   
     </div>
    
     <p class="text-xl mt-4 font-bold leading-relaxed text-green-200">Installation of Django Rest Framework:</p>
     <p class="mb-4">
     Django Rest Framework is used for building RestFul API based on Django Models.
     We will discuss about Models in the next tutorial.
     </p>
      <p class="bg-gray-900 px-2 py-2 rounded overflow-y-scroll scroll-hidden overflow-auto">
      pip install djangorestframework
      </p>

      </div>
    </article>`
,
      
    },

    {
      title:"Enviornment in Python",
      about: "In this module we are going to learn about why virtual enviornment is important ?",
      slug: "environ-in-django",
      body:`<article class="text-lg">
      <div class="max-w-3xl mx-auto">
       
     <p class="mb-4 text-2xl font-bold text-green-200">What is virtual-enviornment?</p>
        <p class="mb-4">
    A virtual-enviornment is an isolated enviornment created for python Projects.So A project can have some dependencies .When we are going to deploy our project or run in other system , we can install only the project's dependecies.
        </p>
        <p class="mb-4">
      Let's take an example , If we have two projects of Django. One project having only Django installed and other project having django & djangorestframework . So when we run these projects in other system, simply we have to install the first project dependencies to run the first project and same for another.</p>

      <p class="mb-4 text-2xl font-bold text-green-200">Using Virtual Enviornment?</p>
      <p class="bg-gray-900 px-2 py-2 rounded overflow-y-scroll scroll-hidden overflow-auto">
      pip install virtualenv
       </p>
      <p class="mb-4 mt-4">
    You have to install virtualenv using pip in your system.If you are using Python>3 , venv is already in site-packages.</p>

        <p class="mb-4">

          
        <span class="text-xl font-bold leading-relaxed text-green-200">Creating Virtual Enviornment −
        </span> 
        <p class="bg-gray-900 px-2 py-2 rounded overflow-y-scroll scroll-hidden overflow-auto mb-4">
        virtualenv env
         </p>
         After this python will create a folder structure having a Scripts folder.
         Just Go in this folder using 
         <div class="bg-gray-900 px-2 py-2 rounded overflow-y-scroll scroll-hidden overflow-auto mb-4 mt-4">
         <p>cd env\\Scripts</p>
          </div>
          After this you have to activate the enviornment.
          <div class="bg-gray-900 px-2 py-2 rounded overflow-y-scroll scroll-hidden overflow-auto mb-4 mt-4">
          <p>.\\activate.ps1</p>
           </div>
        </p>
  
     <p class="mb-4 mt-4 text-2xl font-bold text-green-200"> Develop the project under the virtual enviornment:</p>
  
    <p class="mb-4">
You have created virtual enviornment and activated also. Now start the project out of virtual enviornment folder. Don't mess with this folder 😂.
    </p>
    

      </div>
    </article>`,
    },

    {
      title:"Project and Apps Overview",
      about: "In this tutorial we are going to talk about how models work in django.",
      slug: "project-in-django",
      body:"Not Now.",
    },



    {
      title:"Models in Django",
      about: "In this tutorial we are going to talk about how models work in django.",
      slug: "models-in-django",
      body:"Not now.",
    },
    {
      title: "URL Pattern in Django and DRF",
      about: "",
      slug: "urlpattern-django",
      body: "Not now.",
    },
    
  ];
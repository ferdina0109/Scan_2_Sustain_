const supabaseUrl = "https://sbrweumvawvcwxztyeeh.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNicndldW12YXd2Y3d4enR5ZWVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMxMzI5MzEsImV4cCI6MjA4ODcwODkzMX0.CcmUB09BEtGUqRBDmKVhnoX9tF7oAOLDuYmQE34cenk"

const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey)

document.getElementById("complaintForm").addEventListener("submit", async function(e){

e.preventDefault()

const issue = document.getElementById("issueOptions").value

const { data, error } = await supabaseClient
.from("complaints")
.insert([
{
issue: issue
}
])

if(error){
console.log(error)
alert("Error submitting complaint")
}
else{
alert("Complaint submitted successfully")
}

})
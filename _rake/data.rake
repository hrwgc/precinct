# Usage: rake data title="A Title" [date="2012-02-09"]
desc "Create a new dataset in #{CONFIG['data']}"
task :dataset do
  abort("rake aborted: '#{CONFIG['dataset']}' directory not found.") unless FileTest.directory?(CONFIG['dataset'])
  title = ENV["title"] || "new-data"
  tags = ENV["tags"] || "[]"
  desc = ENV["desc"] || ""
  shp = ENV["shp"] || ""
  sql = ENV["sql"] || ""
  csv = ENV["csv"] || ""
  api = ENV["api"] || ""
  parents = ENV["parents"] || ""
  source = ENV["source"] || "#"
  category = ENV["category"] || "dataset"
  slug = title.downcase.strip.gsub(' ', '-').gsub(/[^\w-]/, '')
  begin
    date = (ENV['date'] ? Time.parse(ENV['date']) : Time.now).strftime('%Y-%m-%d')
  rescue Exception => e
    puts "Error - date format must be YYYY-MM-DD, please check you typed it correctly!"
    exit -1
  end
  filename = File.join(CONFIG['dataset'], "#{date}-#{slug}.#{CONFIG['data_ext']}")
  if File.exist?(filename)
    abort("rake aborted!") if ask("#{filename} already exists. Do you want to overwrite?", ['y', 'n']) == 'n'
  end
  metadata = File.join(CONFIG['metadata'], "#{date}-#{slug}.#{CONFIG['metadata_ext']}")

  puts "Creating new dataset: #{filename}"
  open(filename, 'w') do |dataset|
    dataset.puts "---"
    dataset.puts "layout: post"
    dataset.puts "title: \"#{title.gsub(/-/,' ')}\""
    dataset.puts "description: \"#{desc}\""
    dataset.puts "category: \"#{category}\""
    dataset.puts "tags: \"#{tags}\""
    dataset.puts "sql: \"#{sql}\""
    dataset.puts "shp: \"#{shp}\""
    dataset.puts "csv: \"#{csv}\""
    dataset.puts "parents: \"#{parents}\""
    dataset.puts "source: \"#{source}\""
    dataset.puts "metadata: \"{{BASE_PATH}}#{metadata.gsub(/^\./,'')}\""
    dataset.puts "---"
    dataset.puts "{% include JB/setup %}"
  end
end # task :dataset


# Usage: rake metadata title="A Title" [date="2012-02-09"]
desc "Create new metadata in #{CONFIG['metadata']}"
task :metadata do
  abort("rake aborted: '#{CONFIG['metadata']}' directory not found.") unless FileTest.directory?(CONFIG['metadata'])
  title = ENV["title"] || "new-metadata"
  shp = ENV["shp"] || ""
  sql = ENV["sql"] || ""
  csv = ENV["csv"] || ""
  api = ENV["api"] || ""
  tags = ENV["tags"] || "[]"
  desc = ENV["desc"] || ""
  parents = ENV["parents"] || "[]"
  source = ENV["source"] || "#"
  category = ENV["category"] || "metadata"
  slug = title.downcase.strip.gsub(' ', '-').gsub(/[^\w-]/, '')
  begin
    date = (ENV['date'] ? Time.parse(ENV['date']) : Time.now).strftime('%Y-%m-%d')
  rescue Exception => e
    puts "Error - date format must be YYYY-MM-DD, please check you typed it correctly!"
    exit -1
  end
  filename = File.join(CONFIG['metadata'], "#{date}-#{slug}.#{CONFIG['metadata_ext']}")
  if File.exist?(filename)
    abort("rake aborted!") if ask("#{filename} already exists. Do you want to overwrite?", ['y', 'n']) == 'n'
  end
  dataset = File.join(CONFIG['dataset'], "#{date}-#{slug}.#{CONFIG['data_ext']}")
  
  
  puts "Creating new dataset: #{filename}"
  open(filename, 'w') do |metadata|
    metadata.puts "---"
    metadata.puts "layout: post"
    metadata.puts "title: \"#{title.gsub(/-/,' ')}\""
    metadata.puts "description: \"#{desc}\""
    metadata.puts "category: \"#{category}\""
    metadata.puts "tags: \"#{tags}\""
    metadata.puts "api: \"#{api}\""
    metadata.puts "parents: \"#{parents}\""
    metadata.puts "sql: \"#{api}\""
    metadata.puts "shp: \"#{api}\""
    metadata.puts "source: \"#{source}\""
    metadata.puts "data: \"{{BASE_PATH}}#{dataset.gsub(/^\./,'')}\""
    metadata.puts "---"
    metadata.puts "{% include JB/setup %}"
  end
end # task :metadata

task :data => [ :dataset, :metadata] do |t|
  puts "t.name done"
end
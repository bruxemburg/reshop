-- prunes all the data from the public schema (public."directus_collections", public."directus_fields", public."directus_relations" are not included, feel free to add them if you need to prune them as well)
TRUNCATE TABLE public."categories", public."order_lines", public."orders", public."products", public."products_files", public."reviews", public."users", public."directus_activity", public."directus_files", public."directus_flows", public."directus_folders", public."directus_migrations", public."directus_notifications", public."directus_operations", public."directus_panels", public."directus_permissions", public."directus_presets", public."directus_revisions", public."directus_roles", public."directus_sessions", public."directus_settings", public."directus_shares", public."directus_users", public."directus_webhooks" RESTART IDENTITY CASCADE;
